class renameFile {
	
		/**
		*		QUESTA CLASSE METTE A DISPOSIZIONE UN METODO PER RINOMINARE I FLIE
		*
		*/
		
	    public boolean fileRename (File oldFilePath, File newFilePath) {
			boolean success = oldFilePath .renameTo(newFilePath );
			if(success)
            System.out.println("file is renamed..");
			return success;
    }
	
	// ESEMPIO FUNZIONAMENTO
	public void example () {
		int scelta = 0;
		if (sceltaa == 0) {
                        fileRename(new File(CreateOrInsertDBPath),new File(Environment.getExternalStorageDirectory().toString()+"/DBhandlerData/cacheFolder/new.txt"));
                    } else if (sceltaa == 1) {
                        fileRename(new File(CreateOrInsertDBPath),new File(Environment.getExternalStorageDirectory().toString()+"/DBhandlerData/cacheFolder/existing.txt"));
                    }
	}
	
	private void writeToFile(String data,Context context) {
    try {
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(context.openFileOutput("config.txt", Context.MODE_PRIVATE));
        outputStreamWriter.write(data);
        outputStreamWriter.close();
    }
    catch (IOException e) {
        Log.e("Exception", "File write failed: " + e.toString());
    } 
}

private String readFromFile(Context context) {

    String ret = "";

    try {
        InputStream inputStream = context.openFileInput("config.txt");

        if ( inputStream != null ) {
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String receiveString = "";
            StringBuilder stringBuilder = new StringBuilder();

            while ( (receiveString = bufferedReader.readLine()) != null ) {
                stringBuilder.append(receiveString);
            }

            inputStream.close();
            ret = stringBuilder.toString();
        }
    }
    catch (FileNotFoundException e) {
        Log.e("login activity", "File not found: " + e.toString());
    } catch (IOException e) {
        Log.e("login activity", "Can not read file: " + e.toString());
    }

    return ret;
}
}