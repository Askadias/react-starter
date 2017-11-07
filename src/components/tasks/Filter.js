import React from 'react'
import FilterButton from "./containers/FilterButton";

export const FilterTypes = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

const Filter = () => (
    <p>
        <FilterButton filter={FilterTypes.SHOW_ALL}>
            All
        </FilterButton>
        <FilterButton filter={FilterTypes.SHOW_ACTIVE}>
            Active
        </FilterButton>
        <FilterButton filter={FilterTypes.SHOW_COMPLETED}>
            Completed
        </FilterButton>
    </p>
);

export default Filter;
