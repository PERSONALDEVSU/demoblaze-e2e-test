describe('PetStore API - E2E Flow', () => {

  const baseUrl = 'https://petstore.swagger.io/v2/pet'

  const petData = {
    id: 999999,
    name: "QA_Dog",
    category: {
      id: 1,
      name: "Dogs"
    },
    photoUrls: ["https://example.com/dog.jpg"],
    tags: [
      {
        id: 1,
        name: "test"
      }
    ],
    status: "available"
  }

  it('Add new pet to store', () => {

    cy.request({
      method: 'POST',
      url: baseUrl,
      body: petData
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(petData.id)
      expect(response.body.name).to.eq(petData.name)

    })

  })


  it('Get pet by ID', () => {

    cy.request({
      method: 'GET',
      url: `${baseUrl}/${petData.id}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(petData.id)

    })

  })


  it('Update pet name and status', () => {

    const updatedPet = {
      id: petData.id,
      name: "QA_Dog_Updated",
      status: "sold"
    }

    cy.request({
      method: 'PUT',
      url: baseUrl,
      body: updatedPet
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('sold')

    })

  })


  it('Find pet by status sold', () => {

    cy.request({
      method: 'GET',
      url: `${baseUrl}/findByStatus`,
      qs: {
        status: 'sold'
      }
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')

    })

  })

})