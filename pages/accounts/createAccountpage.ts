import { faker } from "@faker-js/faker";
import { AccountsPage } from "./accounts";

export class CreateAccountPage extends AccountsPage{
  
 async mandatoryFieldsforCA(){
      await this.page.fill("#accountName",faker.person.fullName())
      
    }

}