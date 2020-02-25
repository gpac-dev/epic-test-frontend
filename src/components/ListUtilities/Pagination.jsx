/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { MemoryRouter, Route } from 'react-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const PaginationContainer = css`
width: 80%;
margin: 30px auto;

ul{
    justify-content: center;
    margin:  auto;
    }
`;



const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiCheckbox: {
            // Name of the rule
            colorPrimary: {
                // Some CSS
                color: '#1A1C21',
                checked: {
                    color: '#4056F4'
                }

            },

        },
        MuiFormControlLabel: {
            label: {
                fontSize: '18px',
                fontWeight: '300'
            }
        }
    },
});





export default function PaginationLink() {
    return (
        <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
            <Route>
                {({ location }) => {
                    const query = new URLSearchParams(location.search);
                    const page = parseInt(query.get('page'), 10) || 1;

                    return (
                        <ThemeProvider theme={theme} >
                            <Pagination css={PaginationContainer}
                                page={page}
                                count={10}
                                renderItem={item => (
                                    <PaginationItem className="c-flex-center"
                                        component={Link}
                                        to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                                        {...item}
                                    />
                                )}
                            />
                        </ThemeProvider>
                    );
                }}
            </Route>
        </MemoryRouter>

    );
}
