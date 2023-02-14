import os


baseDirectory = os.getcwd()

envGlobals = {
    'baseUrl': 'http://localhost:8000',
    'uploads': {
        'pdf': f'{baseDirectory}/application/storage/uploads/pdf_uploads',
        'word': f'{baseDirectory}/application/storage/uploads/word_uploads'
    },
    'downloads': {
        'txt': f'{baseDirectory}/application/storage/downloads/text_downloads',
        'word': f'{baseDirectory}/application/storage/downloads/word_downloads',
        'pdf': f'{baseDirectory}/application/storage/downloads/pdf_downloads'
    }
}