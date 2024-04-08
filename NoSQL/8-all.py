#!/usr/bin/env python3
'''Python Module
'''


def list_all(mongo_collection):
    '''fn Lists all documents in a collection.
    '''
    return [doc for doc in mongo_collection.find()]