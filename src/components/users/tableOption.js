export const columns = [
  {
    Header: 'MLS#',
    accessor: '_id',
  },
  {
    Header: 'Post Date',
    accessor: 'date',
  },
  {
    Header: 'Sales Price',
    accessor: 'salesPrice',
  },
  {
    Header: 'Address',
    columns: [
      {
        Header: 'Street1',
        accessor: 'street1',
      },
      {
        Header: 'Street2',
        accessor: 'street2'
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'State',
        accessor: 'state'
      },
      {
        Header: 'ZipCode',
        accessor: 'zipCode'
      },
      {
        Header: 'Neighborhood',
        accessor: 'neighborhood'
      }
    ]
  },

  {
    Header: 'Features',
    columns: [
      {
        Header: 'Bedroom(s)',
        accessor: 'bedrooms'
      },
      {
        Header: 'Bathroom(s)',
        accessor: 'bathrooms'
      },
      {
        Header: 'SqFeet',
        accessor: 'squareFeet'
      },
      {
        Header: 'Lot Size',
        accessor: 'lotSize'
      },
      {
        Header: 'Garage Size',
        accessor: 'garageSize'
      },
      {
        Header: 'Description',
        accessor: 'description'
      }
    ]
  }
  
];