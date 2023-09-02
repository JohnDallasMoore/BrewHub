const {
    S3Client,
    GetObjectCommand,
    ListObjectsV2Command,
    PutObjectCommand
  } = require('@aws-sdk/client-s3')

  const fs = require('fs')
  

  class imageHandler {
    constructor(bucket, region) {
      this.bucketName = bucket
      this.client = new S3Client({
        region
      })
    }
  
    // List up to {maxKeys} most recent bucket uploads
    async listImages(maxKeys = 5) {
      const command = new ListObjectsV2Command({
        Bucket: this.bucketName,
        MaxKeys: maxKeys
      })
  
      try {
        const {
          Contents
        } = await this.client.send(command)
        return Contents
      } catch (err) {
        console.error(err)
      }
    }
  
    async uploadImage(imageData, keyName) {
      const command = new PutObjectCommand({
        Bucket: this.bucketName, // required
        Key: keyName, // required
        Body: imageData
      })
  
      try {
        const res = await this.client.send(command);
  
        if (res['$metadata'].httpStatusCode === 200) {
          console.log(`Object with key ${key} uploaded successfully.`)
        }
  
        return res
      } catch (err) {
        console.error(err)
      }
    }
  
    // Retrieve an object by key and write incoming data stream to output dir
    async downloadImage(key) {
      const command = new GetObjectCommand({
        Bucket: this.bucketName, // required
        Key: key // required
      })
  
      const imageRes = await this.client.send(command)
  
      // Handle response based on status code
      if (imageRes['$metadata'].httpStatusCode === 200) {
        console.log(`Image data for ${key} received.\nWriting to file.`)
  
        await this.#writeStream(imageRes, key)
      }
    }
  
    // Transform the download response body into a byte array and write to stream
    // This private method is called by the downloadImage method 
    async #writeStream(imgData, key) {
      const writePath = `./output/${key}`
  
      const fileStream = fs.createWriteStream(writePath)
  
      imgData.Body.on('data', chunk => {
        fileStream.write(chunk)
      })
  
      imgData.Body.once('end', () => {
        console.log(`Image successfully written to ${writePath}`)
      })
  
      fileStream.on('finish', () => {
        fileStream.close()
      })
  
      fileStream.on('error', (err) => {
        console.error(`ERROR WRITING FILE ::: ${err}`)
        fileStream.close()
      })
    }
  }
  
  module.exports = imageHandler;