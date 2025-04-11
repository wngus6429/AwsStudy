// upload.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class UploadService {
  private s3: S3Client;
  private bucketName = process.env.AWS_S3_BUCKET_NAME;

  constructor() {
    this.s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  // async uploadFile(file: Express.Multer.File): Promise<string> {
  //   const fileName = file.originalname; // 파일명에 충돌 가능성이 있으므로 고유한 이름 사용을 고려

  //   const command = new PutObjectCommand({
  //     Bucket: this.bucketName,
  //     Key: fileName,
  //     Body: file.buffer,
  //     ContentType: file.mimetype,
  //   });

  //   try {
  //     await this.s3.send(command);
  //     return `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
  //   } catch (error) {
  //     console.error('S3 업로드 에러:', error);
  //     throw new InternalServerErrorException('파일 업로드 실패');
  //   }
  // }
}
