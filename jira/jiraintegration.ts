/**
 * endpoint 
 * authorization
 * headers
 * body
 * responseCode 
 * 
 * 
 */

import axios from "axios"

const endPointURl="https://vidyainsight26.atlassian.net/rest/api/2/issue"
const ProjectKey="AT"
const apiUsername="vidya.insight26@gmail.com"
const apikey="ATATT3xFfGF02877HNV6xAJmz_aAjnzHiTJQuMF_L79KSb3FZq5NThSPseQIXPjkI6jRw6Ne94osd-DkarrBBejUrGKEX2zmLzM6PC-4pJpUobcTKUMOGD9cmeKsE-9DF6PIWtWUfqpvuEX7JAkWwmZENBydZ0qUKSkuHmnW_GNDDueqUxL4gvA=F38CD6D5"


export async function createIssue(summary:string,desc:string){
    const issuBody={
        "fields":{
            "project":{
                "key":ProjectKey
            },
            "summary":summary,
            "description":desc,
            // "priority":{
            //     "name":"High"
            // }
            "issuetype":{
                "name":"Bug"
            }
        }
      }
    
          const res=await axios.post(endPointURl,issuBody,{
           headers:{
            "Content-Type":"application/json",
            'Accept': 'application/json',
           },auth:{
               username: apiUsername,
               password: apikey
           }
          }
        
        )
    
        console.log(res.status)
        console.log(res.data.key)
        return res.data.key
    }
    
    

//createIssue("Jira","Defect Logigg")