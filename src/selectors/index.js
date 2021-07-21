export const findUser = (userList, searchedId) => {
    const user = userList.find((testedUser) =>
        testedUser.id === Number(searchedId)
    );
    return user;
}

export const returnSelectList = (datas) => {
    const list = datas.map((data) => ({
        value: data.name,
        label: data.name,
    }));

    return list;
};