/**
* 		THIS CLASS CAN BE USED TO GET THE DEVICE DEFAULT LANGUAGE AND SO BEING ABLE
		TO CHOOSE THE CORRECT LANGUAGE TO SHOW. (For example, i may want to choose 
		if showing italian or english strings contained into a String array). 
*/
class DeviceCurrentLanguage {
	
	 String deviceLanguage;
	
	public static void main (String [] args) {
		
		deviceLanguage = Locale.getDefault().getDisplayLanguage();
        show(deviceLanguage);
	}
	
	public void show (Object el) {
        System.out.println("Element: " + el);
    }
	
}