class showMessages {

 /**
     * This method is used to show a message into an alertDialog windows.
	 * Mostro un messaggio all'interno di una finestra di allerta, cioè unafinestrella bianca. 
     *
     * @param title to set for the window
     * @param Message to show inside the window
     */
    public void showMessage(String title,String Message,Context context){
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(true);
        builder.setTitle(title);
        builder.setMessage(Message);
        builder.show();
    }
	//--------------------
	public void showMessageWithButtons (String title,String Message,Context context){
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(true);
        builder.setTitle(title);
		builder.setPositiveButton("OK", null);
		builder.setNegativeButton("NO", null);
        builder.setMessage(Message);
        builder.show();
    }
}

