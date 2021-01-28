package com.example.ament.dbhandler;

import android.os.Environment;

import java.io.File;
import java.io.IOException;

/**
 * Created by ament on 27/11/2017.
 */

public class AndroidFileExistanceCheck {


    private final File path = Environment.getExternalStorageDirectory(); // /storage/emulated/0
    private final String fileName = "database.db";		// SOSTITUIRE COL NOME DEL FILE CHE VOGLIO
    private final String folderName = "DBhandlerData";	// SOSTITUIRE COL NOME DELLA CARTELLA CHE VOGLIO CREARE
    File folder = new File(path + "/"+folderName);		// LA CARTELLA SARA' CREATA IN /storage/emulated/0
    File database = new File (folder.toString()+"/"+fileName);	// CREO IL FILE NELLA CARTELLA 

    boolean existsFile;
    boolean existsFolder;


    //--------------METODI--------------------------
    /**
     * This method checks if a file exists or not in the main folder
     *
     * @return a boolean true if it exists or false if it doea not exists
     */
    public boolean existsFile () {
        existsFile =  database.exists();
        return existsFile;
    }

    //----------------------------------------

    public boolean createFile (boolean existsFile) throws IOException {
        boolean b = false;
        if (!existsFile) {
            File f = new File(database.toString());
            b = f.createNewFile();
        }
        return b;
    }
    //----------------------------------------

    /**
     * This method checks if the app folder exists
     *
     * @return a boolean, true if it exists, false otherwise
     */
    public boolean existsFolder () {
        existsFolder = folder.exists();
        return existsFolder;
    }

    //----------------------------------------

    /**
     * This method will create the app folder in /storage/emulated/0
     *
     *  @return a boolean, true if the folder is created , false otherwise
     */
    public boolean createFolder () {
        boolean success = false;
        if (!existsFolder) {
            File f = new File (path.toString()+"/DBhandlerData");
            success = folder.mkdir();
        }
        return success;
    }


}
