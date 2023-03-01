// NOTE: make sure the tests do not depend on the state of the api database.
// assert only the response is correct

describe('TODO Api', () => {
  it('should', () => {
    cy.request('GET', '/api/todos').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).gte(0);
    });
  });

  it('should create a new todo', () => {
    cy.request('POST', '/api/todos', { title: 'New Todo' }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain({
        title: 'New Todo',
        description: '',
        done: false,
      });
    });
  });

  it('should update a todo', () => {
    cy.request('POST', '/api/todos', {
      title: 'this todo should get completed',
      description: 'blah description',
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        return cy.request('PATCH', `/api/todos/${response.body.id}`, {
          done: true,
        });
      })
      .then((updatedRes) => {
        cy.log(updatedRes.body);
        expect(updatedRes.status).to.eq(200);
        expect(updatedRes.body.done).to.eq(true);
      });
  });

  it('should delete a todo', () => {
    cy.request('POST', '/api/todos', {
      title: 'this todo should get deleted',
      description: 'blah description',
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        return cy.request('DELETE', `/api/todos/${response.body.id}`);
      })
      .then((deletedRes) => {
        cy.log(deletedRes.body);
        expect(deletedRes.status).to.eq(200);
        return cy.request({
          method: 'GET',
          failOnStatusCode: false,
          url: `/api/todos/${deletedRes.body.id}`,
        });
      })
      .then((getDeletedTodoRes) => {
        expect(getDeletedTodoRes.status).to.eq(404);
      });
  });
});
