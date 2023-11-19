public with sharing class ContactController {
   @AuraEnabled(cacheable=true)
   public static List<Contact> getContacts(){
    try {
        return [select firstName,lastname,email from contact];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}




