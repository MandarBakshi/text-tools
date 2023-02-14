import nltk
# nltk.download('punkt')
from nltk.tokenize import sent_tokenize
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np
from application.config import envGlobals

# Tokenize the text
def tokenize_text(text):
    return sent_tokenize(text)

# Vectorize the sentences
def vectorize_sentences(sentences):
    vectorizer = CountVectorizer()
    vectors = vectorizer.fit_transform(sentences)
    return vectors.toarray()

# Compute similarity matrix
def compute_similarity_matrix(vectors):
    similarity_matrix = cosine_similarity(vectors)
    return similarity_matrix

# Create graph
def create_graph(similarity_matrix):
    graph = np.zeros((len(similarity_matrix), len(similarity_matrix)))
    for i in range(len(similarity_matrix)):
        for j in range(len(similarity_matrix)):
            if i != j:
                graph[i][j] = similarity_matrix[i][j]
    return graph

# Rank sentences
def rank_sentences(graph):
    n = len(graph)
    eigenvector = np.ones(n) / n
    for i in range(100):
        eigenvector = np.dot(graph, eigenvector)
    return eigenvector

# Select top-ranked sentences
def select_top_ranked_sentences(sentences, eigenvector, top_n=3):
    ranked_sentences = [(eigenvector[i], s) for i, s in enumerate(sentences)]
    ranked_sentences.sort(key=lambda x: x[0], reverse=True)
    return [s for _, s in ranked_sentences[:top_n]]

# main function
def extractive_summarization(text, top_n, uniqueFilename):
    sentences = tokenize_text(text)
    vectors = vectorize_sentences(sentences)
    similarity_matrix = compute_similarity_matrix(vectors)
    graph = create_graph(similarity_matrix)
    eigenvector = rank_sentences(graph)
    summary = select_top_ranked_sentences(sentences, eigenvector, top_n)
    # print(type(summary))
    summary_txt = " ".join(summary)
    # return summary
    txtFilePath = f"{envGlobals['downloads']['txt']}/{uniqueFilename}.txt"
    txtFile = open(txtFilePath, 'w')
    txtFile.write(summary_txt)
    txtFile.close()
    return {
        "txt_output": summary_txt,
        "download_link": f"{envGlobals['baseUrl']}/downloads/text/{uniqueFilename}.txt"
    }




# test
# text = '''Agrawal was appointed as the CEO of Twitter in November 2021 after Dorsey stepped down. 
# At the time of his appointment, Agrawal was serving as the Chief Technology Officer of Twitter. He had joined the company in 2011 when it had less than 1,000 employees.
# It was also reported that Agrawal was central to Dorsey's vision for not just Twitter but the future of the social media. Agrawal had been closely involved with Dorsey over the years in the evolution of Twitter, reported CNBC at the time.
# "Agrawal has been Dorsey’s closest partner in considering the future of the Twitter platform, and the two have a shared vision for decentralising social media," reported CNBC.
# When Agrawal was appointed CEO, he joined a steadily growing club of executives from India rising to the top of global corporations, including Microsoft CEO Satya Nadella, Alphabet CEO Sundar Pichai, and Adobe CEO Shantanu Narayen. Indra Nooyi had served as PepsiCo’s CEO for 12 years before stepping down in 2018. '''
# summary = extractive_summarization(, 1)
# print(summary)
