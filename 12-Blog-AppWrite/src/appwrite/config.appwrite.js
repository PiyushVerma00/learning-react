import config from "../config/config";

import { Client, ID, Storage, Databases, Query } from "appwrite";


export class Service{
    client = new Client()
    databases 
    bucket

    constructor(){
        this.client
                    .setEndpoint(config.appwriteUrl)
                    .setProject(config.appwriteProjectId)

        this.databases = new Databases()
        this.bucket  = new Storage()            
    }

    async createPost({title,content,featuredImage,status,userId,slug}){
            try {
                return await this.databases.createDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                    }
                )
            } catch (error) {
                throw error
            }
    }

    async updatePost(slug, {title,content,featuredImage,status}){
        try {
           return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )         
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPost(slug){
        try {
         return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal('status','active')]){
        try {
            await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error
        }
    }

    // file upload service

    async uploadFile(file){
            try {
               return await this.bucket.createFile(
                    config.appwriteBucketId,
                    ID.unique(),
                    file
                )                
            } catch (error) {
                throw error
            }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error
        }
    }

    getfilePreview(fileId){
        return this.bucket.getfilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()

export default service