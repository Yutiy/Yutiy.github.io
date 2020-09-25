const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const logger = require('tracer').colorConsole();

const docsRoot = path.join(__dirname, '..', 'docs')
const sidebarPath = path.join(__dirname, '..', '.vuepress', 'config', 'sidebar.js')
const template = `
<% for(let variable of variables) { %>
const <%- variable.name %> = <%- JSON.stringify(variable.js); %>
<% } %>

module.exports = {
  <% for (let variable of variables) { %>
    "/docs/<%- variable.path %>/": <%- variable.name %>,
  <% } %>
}
`

main()

/**
 * 主体函数
 */
function main() {
  const variables = []

  const tocs = readTocs(docsRoot)
  tocs.forEach(toc => {
    const js = mapTocToSidebar(toc)
    if (!js.length) {
      return
    }

    variables.push({
      path: path.basename(toc),
      name: path.basename(toc).replace(/ /g, '_'),
      js
    })
  })

  fs.writeFileSync(sidebarPath, ejs.render(template, { variables }));
}

/**
 * 读取指定目录的文件夹作为不同的目录
 * @param {String} root
 */
function readTocs(root) {
  const result = []
  const files = fs.readdirSync(root)
  files.forEach(name => {
    const file = path.resolve(root, name)
    if (fs.statSync(file).isDirectory()) {
      result.push(file)
    }
  })
  return result
}

/**
 * 将对应目录映射为对应的边栏配置
 * @param {String} root
 * @param {String} prefix
 */
function mapTocToSidebar(root, prefix) {
  prefix = prefix || ''
  let sidebar = []
  const files = fs.readdirSync(root)

  files.forEach((filename, index) => {
    const file = path.resolve(root, filename)
    const stat = fs.statSync(file)

    if (stat.isDirectory()) {
      if (filename === 'images') return;
      const [order, title] = filename.split('.')
      sidebar[index] = {
        title: title || order,
        collapsable: false,
        children: mapTocToSidebar(file, prefix + filename + '/')
      }
    } else {
      const metaData = filename.split('.');
      let [order, title, type] = metaData;

      if (metaData.length === 3) {
        order = parseInt(order, 10)
        if (isNaN(order) || order < 0) return
      }

      if (sidebar[order]) {
        logger.warn(`For ${file}, its order has appeared in the same level directory. And it will be rewritten.`);
      }

      if (metaData.length === 3) {
        sidebar[order] = [prefix + filename, title]
      } else {
        sidebar[++sidebar.length] = [prefix + filename, order]
      }
    }
  })

  sidebar = sidebar.filter(item => item !== null && item !== undefined)
  return sidebar
}
