const path = require('path');

//slugを作る処理
// module.exports.onCreateNode = ({ node, actions }) => {
//  // actionsからcreateNodeFieldを取り出す。
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {    
//     //slugの作成にはnodeのbuildingモジュールであるpathモジュールのbaseneme関数を使用する。
//     const slug = path.basename(node.fileAbsolutePath,'.md');
//     // /別のノードを拡張します
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     })
//   }
// }


//slugから詳細ページを作成する処理
module.exports.createPages = async ({ graphql, actions }) => {
 // actionsからcreatePageを取り出す。
  const { createPage } = actions
  const blogTemplate = path.resolve('src/templates/blogDetail.js')
  //非同期処理を簡潔に実行する
  const res = await graphql(`
  query {
    allContentfulBlogPost{
      edges {
        node {
          slug
        }
      }
    }
  }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    //createPage({})
    createPage({
      component: blogTemplate,
      //バッククォート
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
} 