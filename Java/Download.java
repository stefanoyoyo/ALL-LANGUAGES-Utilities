public class Download {  

     public static void main(String[] args) throws Exception {  

        Download d = new Download();  
        d.URLSetUp("http://www.sheldonbrown.com/web_sample1.html");  
     }  

    public String URLSetUp(String urlProp) throws Exception {  

        StringBuffer tempData = new StringBuffer();  
        String contentXML = "";  
        String line = "";  
        URL url1;  
         try {  
            url1 = new URL(urlProp);  

            URLConnection conn = url1.openConnection();  

            conn.setDoOutput(true);  
             OutputStreamWriter wr = new OutputStreamWriter(conn
                .getOutputStream());  

             BufferedReader rd = new BufferedReader(new InputStreamReader(conn
                .getInputStream()));  
              while ((line = rd.readLine()) != null) {  
                 tempData.append(line);  
             }  
             contentXML = tempData.toString();  

            wr.close();  
            rd.close();  

         } catch (MalformedURLException e) {  

             e.printStackTrace();  
         } catch (IOException e) {  

             e.printStackTrace();  
        }  
         if (contentXML != null) {  
             return contentXML;  
        } else {  

             System.out.println("Error");  
         }  
         return null;  

     }  
} 