export default {
    name: 'Title',
    type: 'document',
    title: 'Property',
    fields: [
        {
            name: 'Title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'Price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'Direction',
            type: 'string',
            title: 'Direction'
        },
        {
            name: 'Latitude',
            type: 'number',
            title: 'Latitude'
        },
        {
            name: 'Longitude',
            type: 'number',
            title: 'Longitude'
        },
        {
            name: 'Surface',
            type: 'number',
            title: 'Surface'
        },
        {
            name: 'Beds',
            type: 'number',
            title: 'Beds'
        },
        {
            name: 'Bathrooms',
            type: 'number',
            title: 'Bathrooms'
        },
        {
            name: 'TypeProperty',
            type: 'string',
            title: 'TypeProperty',
            options: {
                list: [
                  { title: 'House', value: 'House' },
                  { title: 'Apartment', value: 'Apartment' },
                ],
              }
        },
        {
            name: 'TypeOfContract',
            type: 'string',
            title: 'TypeOfContract',
            options: {
                list: [
                  { title: 'Rent', value: 'Rent' },
                  { title: 'Sale', value: 'Sale' },
                ],
              }
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ]
        }
    ],

}