import os
import time
import uuid
from flask import Blueprint, jsonify, send_from_directory, request, make_response
from werkzeug.utils import secure_filename
from application.config import envGlobals

views = Blueprint('views', __name__)

@views.route('/api/conversion/pdf-to-text/', methods=['POST'])
def handleConversionPdfToText():
    if request.method == 'POST':
        file = request.files.get('pdf')
        fileName = str(uuid.uuid4())
        downloadName = secure_filename(file.filename)
        filePath = f"{envGlobals['uploads']['pdf']}/{fileName}"
        print("file uploaded to:  ", filePath)

        file.save(filePath)

        from ..utils.conversion.pdf_to_text import convert_PdfToText
        res = convert_PdfToText(filePath, fileName, downloadName)


        time.sleep(3)
        os.remove(filePath)

        return jsonify(res)

    # return jsonify("You do not have access")
    return make_response(jsonify("restricted access"), 405)



@views.route('/api/conversion/pdf-to-word/', methods=['POST'])
def handleConversionPdfToWord():
    if request.method == 'POST':
        file = request.files.get('pdf')
        fileName = str(uuid.uuid4())
        downloadName = secure_filename(file.filename)
        filePath = f"{envGlobals['uploads']['word']}/{fileName}"
        print("file uploaded to:  ", filePath)

        file.save(filePath)

        from ..utils.conversion.pdf_to_word import convert_PdfToWord
        res = convert_PdfToWord(filePath, fileName, downloadName)


        time.sleep(3)
        os.remove(filePath)

        return jsonify(res)

    # return jsonify("You do not have access")
    return make_response(jsonify("restricted access"), 405)



@views.route('/api/summary/extractive/', methods=['POST'])
def handleTextSummary():
    if request.method == 'POST':
        formData = request.get_json()
        fileName = str(uuid.uuid4())
        from ..utils.summarization.summary_from_text import fGenarateSummary
        res = fGenarateSummary(formData['txt'], formData['length'], fileName)

        return jsonify(res)



@views.route('/api/summary/extractive-lex/', methods=['POST'])
def handleTextSummarylex():
    if request.method == 'POST':
        formData = request.get_json()
        # print(formData)
        fileName = str(uuid.uuid4())
        # from ..utils.summarization.summary_from_text import fGenarateSummary
        # res = fGenarateSummary(formData['txt'], formData['length'], fileName)
        from ..utils.summarization.lex import extractive_summarization
        res = extractive_summarization(formData['txt'], int(formData['length']), fileName)

        return jsonify(res)



@views.route('/demo-route/', methods=['GET', 'POST'])
def handledemo():
    return f"""
    
    <a href="/downloads/pdf/sample_pdf_1.pdf" target="_blank">Download file</a>
    
    """