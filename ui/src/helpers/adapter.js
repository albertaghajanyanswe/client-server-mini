const createUsersTableData = (id, firstName, lastName, email) => ({ id, firstName, lastName, email });

const adaptUsersTableData = (data) => {
  const dataList = [];
  data.forEach((item) => {
    dataList.push(
      createUsersTableData(
        item.id,
        item.firstName,
        item.lastName,
        item.email,
      )
    );
  });
  return dataList;
};


// eslint-disable-next-line import/prefer-default-export
export { adaptUsersTableData }
