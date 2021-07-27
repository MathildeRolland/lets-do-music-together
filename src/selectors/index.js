
// = = = = = = = = = = FIND THE RIGHT USER DEPENDING ON HIS ID = = = = = = = = = = //
export const findUser = (userList, searchedId) => {
    const user = userList.find((testedUser) =>
        testedUser.id === Number(searchedId)
    );
    return user;
}

// = = = = = = = = = = RETURN LIST FOR THE SELECT COMPONENT = = = = = = = = = = //
export const returnSelectList = (datas) => {
    const list = datas.map((data) => ({
        value: data.id,
        label: data.name,
        id: data.id,
    }));

    return list;
};



// = = = = = = = = = = FILTER USERS = = = = = = = = = = //
export const advFilterUsers = (users, advancedResearch) => {
    console.log(users, advancedResearch);
    // const advFilteredUsers = users.filter((user) => {
    //     advancedResearch.location === user.Locations.name &&
    //     advancedResearch.availability === user.availability &&
    //     advancedResearch.perimeter === user.perimeter &&
    //     advancedResearch.gender === user.gender &&
    //     user.Instruments.forEach((instrument) => advancedResearch.instrument.includes(instrument.name)) &&
    //     user.Genres.forEach((genre) => advancedResearch.genre.includes(genre.name))
    // });

    // return advFilteredUsers;
};

export const filterUsers = (users, research) => {
    const filteredUsers = users.filter((user) => 
        (research.location.toLowerCase() === user.Locations.name.toLowerCase() &&
        user.Instruments.map((instrument) => instrument.name.toLowerCase()).includes(research.instrument.toLowerCase()))
    );

    // console.log(filteredUsers);
    return filteredUsers;
};




// = = = = = = = = = = React select styles = = = = = = = = = = //
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


export const customStylesLight = {
    control: (defaultStyles, state) => ({
        ...defaultStyles,
        boxShadow: state.isFocused ? '0 0 1px 2px #2DBF84' : '0 0 3px #111',
        borderColor: state.isSelected ? '#2DBF84' : 'none',
        borderWidth: state.isSelected ? '2px' : '0px',
        backgroundColor: state.isFocused ? '#B0A9A9' : '#E9E9E9',
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
        color: '#111',
    }),
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        cursor: 'pointer',
    }),
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


export const customThemeLight = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary50: '#2DBF84',
        primary25: '#E9E9E9',
        primary: '#585555',
        neutral0: '#B0A9A9',
    },
});

