import { faker } from "@faker-js/faker";

export class FakerData {
    static getFirstName(): string {
        return faker.person.firstName();
    }
    static getLastName():string{
        return faker.person.lastName()
    }
    static getCompanyname():string{
        return faker.company.buzzNoun()
    }
}
