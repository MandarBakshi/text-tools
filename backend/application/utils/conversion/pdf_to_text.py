from pypdf import PdfReader
from application.config import envGlobals

def convert_PdfToText(filepath, uniqueFilename, downloadname):
    reader = PdfReader(filepath)
    txt = ""

    for page in reader.pages:
        txt += page.extract_text()
    
    txtFilepath = f"{envGlobals['downloads']['txt']}/{uniqueFilename}.txt"
    txtFile = open(txtFilepath, 'w')
    txtFile.write(txt)
    txtFile.close()
    
    # return txt
    return {
        "txt_output": txt,
        "download_link": f"{envGlobals['baseUrl']}/downloads/text/{uniqueFilename}.txt",
        "download_name": downloadname
    }