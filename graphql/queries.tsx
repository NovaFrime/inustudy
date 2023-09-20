import {gql} from "@apollo/client"

const GET_CLASSES = gql `
query {
    classes{
       data{
         attributes{
           uid
           name
           link
           image_url
           lang
           description
           rating
           category
         }
       }
     }
   }
`
export {GET_CLASSES};