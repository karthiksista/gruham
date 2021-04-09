import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import React, { useState } from 'react'

import { BASE_URL } from '../environment';
import axios from 'axios'

function Paginate({ paginatedCallback, code, bedrooms, sortValue }) {
    const [pageValue, setPageValue] = useState(1)

    const paginateUI = async (code, val) => {
        const result = await axios.get(`${BASE_URL}/country/${code}?page=${val}&sort=${sortValue}&roomType=${bedrooms}`)
        const data = result.data
        setPageValue(parseInt(val))
        paginatedCallback(data)
    }
    return (
        <>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first onClick={(e) => paginateUI(code, 1)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous onClick={(e) => paginateUI(code, pageValue - 1)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => paginateUI(code, e.target.innerHTML)}>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => paginateUI(code, e.target.innerHTML)}>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => paginateUI(code, e.target.innerHTML)}>
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => paginateUI(code, e.target.innerHTML)}>
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => paginateUI(code, e.target.innerHTML)}>
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next onClick={(e) => paginateUI(code, pageValue + 1)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </>
    )
}

export default Paginate
