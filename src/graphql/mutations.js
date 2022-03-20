/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      description
      brand
      age
      condition
      price
      replacement
      photos {
        items {
          id
          createdAt
          updatedAt
          album {
            id
            owner
            ownerId
            name
            createdAt
            updatedAt
            description
            brand
            age
            condition
            price
            replacement
            photos {
              nextToken
            }
          }
          fullsize {
            region
            bucket
            key
          }
          thumbnail {
            region
            bucket
            key
          }
          contentType
          gps {
            latitude
            longitude
            altitude
          }
          height
          width
          size
          shopTitle
          shopUrl
          shopRating
          shopDescription
          shopDetails
          shopPrice
          shopDelivery
          shopRelevancy
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      description
      brand
      age
      condition
      price
      replacement
      photos {
        items {
          id
          createdAt
          updatedAt
          album {
            id
            owner
            ownerId
            name
            createdAt
            updatedAt
            description
            brand
            age
            condition
            price
            replacement
            photos {
              nextToken
            }
          }
          fullsize {
            region
            bucket
            key
          }
          thumbnail {
            region
            bucket
            key
          }
          contentType
          gps {
            latitude
            longitude
            altitude
          }
          height
          width
          size
          shopTitle
          shopUrl
          shopRating
          shopDescription
          shopDetails
          shopPrice
          shopDelivery
          shopRelevancy
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      description
      brand
      age
      condition
      price
      replacement
      photos {
        items {
          id
          createdAt
          updatedAt
          album {
            id
            owner
            ownerId
            name
            createdAt
            updatedAt
            description
            brand
            age
            condition
            price
            replacement
            photos {
              nextToken
            }
          }
          fullsize {
            region
            bucket
            key
          }
          thumbnail {
            region
            bucket
            key
          }
          contentType
          gps {
            latitude
            longitude
            altitude
          }
          height
          width
          size
          shopTitle
          shopUrl
          shopRating
          shopDescription
          shopDetails
          shopPrice
          shopDelivery
          shopRelevancy
          owner
        }
        nextToken
      }
    }
  }
`;
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      album {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        description
        brand
        age
        condition
        price
        replacement
        photos {
          items {
            id
            createdAt
            updatedAt
            album {
              id
              owner
              ownerId
              name
              createdAt
              updatedAt
              description
              brand
              age
              condition
              price
              replacement
            }
            fullsize {
              region
              bucket
              key
            }
            thumbnail {
              region
              bucket
              key
            }
            contentType
            gps {
              latitude
              longitude
              altitude
            }
            height
            width
            size
            shopTitle
            shopUrl
            shopRating
            shopDescription
            shopDetails
            shopPrice
            shopDelivery
            shopRelevancy
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      size
      shopTitle
      shopUrl
      shopRating
      shopDescription
      shopDetails
      shopPrice
      shopDelivery
      shopRelevancy
      owner
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      album {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        description
        brand
        age
        condition
        price
        replacement
        photos {
          items {
            id
            createdAt
            updatedAt
            album {
              id
              owner
              ownerId
              name
              createdAt
              updatedAt
              description
              brand
              age
              condition
              price
              replacement
            }
            fullsize {
              region
              bucket
              key
            }
            thumbnail {
              region
              bucket
              key
            }
            contentType
            gps {
              latitude
              longitude
              altitude
            }
            height
            width
            size
            shopTitle
            shopUrl
            shopRating
            shopDescription
            shopDetails
            shopPrice
            shopDelivery
            shopRelevancy
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      size
      shopTitle
      shopUrl
      shopRating
      shopDescription
      shopDetails
      shopPrice
      shopDelivery
      shopRelevancy
      owner
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      album {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        description
        brand
        age
        condition
        price
        replacement
        photos {
          items {
            id
            createdAt
            updatedAt
            album {
              id
              owner
              ownerId
              name
              createdAt
              updatedAt
              description
              brand
              age
              condition
              price
              replacement
            }
            fullsize {
              region
              bucket
              key
            }
            thumbnail {
              region
              bucket
              key
            }
            contentType
            gps {
              latitude
              longitude
              altitude
            }
            height
            width
            size
            shopTitle
            shopUrl
            shopRating
            shopDescription
            shopDetails
            shopPrice
            shopDelivery
            shopRelevancy
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      size
      shopTitle
      shopUrl
      shopRating
      shopDescription
      shopDetails
      shopPrice
      shopDelivery
      shopRelevancy
      owner
    }
  }
`;
