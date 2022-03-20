/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String!) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String!) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String!) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($owner: String) {
    onCreatePhoto(owner: $owner) {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($owner: String) {
    onUpdatePhoto(owner: $owner) {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($owner: String) {
    onDeletePhoto(owner: $owner) {
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
