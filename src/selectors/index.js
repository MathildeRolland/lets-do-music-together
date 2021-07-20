export const findUser = (userList, searchedId) => {
    const user = userList.find((testedUser) =>
        testedUser.id === Number(searchedId)
    );
    return user;
}