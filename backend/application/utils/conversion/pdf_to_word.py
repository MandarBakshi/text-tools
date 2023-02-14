from pdf2docx import Converter
from application.config import envGlobals

def convert_PdfToWord(sourcefile, uniqueFilename, downloadname):
    wordFilepath = f"{envGlobals['downloads']['word']}/{uniqueFilename}.docx"
    conv = Converter(sourcefile)
    conv.convert(wordFilepath, start=0, end=None)
    conv.close()

    return {
        "download_link": f"{envGlobals['baseUrl']}/downloads/word/{uniqueFilename}.docx",
        "download_name": downloadname
    }