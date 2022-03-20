export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "amplifyphotobookytd77f5a70": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppClientSecret": "string"
        }
    },
    "storage": {
        "AmplifyPhotosStorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "AmplifyPhotosApi": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "AmplifyPhotoProcessor": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}