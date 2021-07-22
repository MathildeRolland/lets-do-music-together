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


// == React select styles
export const customStyles = {
    control: (defaultStyles, state) => ({
        ...defaultStyles,
        boxShadow: state.isFocused ? '0 0 1px 2px #2DBF84' : 'none',
        borderColor: state.isSelected ? '#2DBF84' : 'none',
        borderWidth: state.isSelected ? '2px' : '0px',
        backgroundColor: state.isFocused ? '#B0A9A9' : '#585555',
        cursor: 'pointer',
    }),
    singleValue: (defaultStyles, state) => ({
        ...defaultStyles,
        color: '#111',
    }),
    menuList: (defaultStyles, state) => ({
        ...defaultStyles,
        padding: '0px',
        borderRadius: '5px',
    }),
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        cursor: 'pointer',
    }),
    multiValue: (defaultStyles, state) => ({
        ...defaultStyles,
        background: '#232323',
        border: '1px solid #2DBF84',
        borderRadius: '4px',
    }),
    multiValueLabel: (defaultStyles, state) => ({
        ...defaultStyles,
        color: '#B0A9A9',
    }),
    multiValueRemove: (defaultStyles, state) => ({
        ...defaultStyles,
        color: '#B0A9A9',
    })
};

export const customTheme = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary50: '#2DBF84',
        primary25: '#585555',
        primary: '#585555',
        neutral0: '#B0A9A9',
    },
});


// == Filter with the research values
export const filterUsers = (users, advancedResearch) => {
    const filteredUsers = users.filter((user) => {
        advancedResearch.location === user.Locations.name &&
        advancedResearch.availability === user.availability &&
        advancedResearch.perimeter === user.perimeter &&
        advancedResearch.gender === user.gender &&
        user.Instruments.forEach((instrument) => advancedResearch.instrument.includes(instrument.name)) &&
        user.Genres.forEach((genre) => advancedResearch.genre.includes(genre.name))
    });

    return filteredUsers;
};