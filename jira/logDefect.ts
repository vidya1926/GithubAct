import { TestInfo } from "@playwright/test";
import { createIssue } from "./jiraintegration";

export async  function logDefectissue(testinfo:TestInfo){
 const isBug=testinfo.annotations.some(annotation=>annotation.type=== 'Bug')
  if((testinfo.status==='timedOut'|| testinfo.status==='failed') && !isBug){
    const summary=`The  ${testinfo.title} is failed`
    const desc=`Due to ${testinfo.error}`
    const   key= createIssue(summary,desc)
    return key;

  }

}