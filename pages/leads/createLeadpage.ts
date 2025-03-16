import { Faker, faker } from "@faker-js/faker";
import { LeadsPage } from "./leadsPage";
import { FakerData } from "../../utility/fakerUtility";

export class CreateLeadPage extends LeadsPage{

async  enterMandatoryforCLfields(){
 await this.page.fill("#createLeadForm_companyName",FakerData.getCompanyname())
 await this.page.fill("#createLeadForm_firstName",FakerData.getFirstName())
 await this.page.fill("#createLeadForm_lastName",FakerData.getLastName())
 }


}