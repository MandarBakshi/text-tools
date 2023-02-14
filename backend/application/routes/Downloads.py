import os
from flask import Blueprint, send_from_directory
from application.config import envGlobals

downloads = Blueprint('downloads', __name__)

@downloads.route('/downloads/<path:filepath>', methods=['GET', 'POST'])
def handleFileDownload(filepath):
    lst = filepath.split('/')
    filename = lst[1]
    directory = ''
    print(lst)
    match lst[0]:
        case 'text':
            directory = envGlobals['downloads']['txt']
        case 'pdf':
            directory = envGlobals['downloads']['pdf']
        case 'word':
            directory = envGlobals['downloads']['word']

    # return f"<p>You are going to download this file:</p>type = {lst[0]}<p>name = {lst[1]}</p>"
    print(directory)
    return send_from_directory(directory, filename, as_attachment=True)