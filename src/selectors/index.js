export const findUser = (userList, searchedId) => {
    const user = userList.find((testedUser) =>
        // console.log(user.id, searchedId);
        testedUser.id === Number(searchedId)
    );
    console.log(userList, user);
    return user;
}