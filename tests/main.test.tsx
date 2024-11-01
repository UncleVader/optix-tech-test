import {vi, it, expect, describe, beforeEach} from "vitest"
import {render, screen} from "@testing-library/react"
import {Provider} from 'react-redux';
import {makeStore} from "../src/store/store";
import ReviewForm from "../src/components/ReviewSection/components/ReviewForm/ReviewForm";
import "@testing-library/jest-dom/vitest"
import {mockedMoviesState1, mockMovieCompanyData, mockMovieData} from "./mocks/movies.mocks";
import MoviesTable from "../src/components/MoviesTable/MoviesTable";
import userEvent from '@testing-library/user-event'

describe('first test', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Review form should be in the document if a movie is selected', async () => {
    render(
      <Provider store={makeStore(mockedMoviesState1)}>
        <ReviewForm/>
      </Provider>
    )

    expect(screen.getByTestId('review-form')).toBeInTheDocument()
  })

  it('Review form should not be in the document if there is no selected movie', async () => {
    render(
      <Provider store={makeStore({movies:{selectedMovie: undefined}})}>
        <ReviewForm/>
      </Provider>
    )

    expect(screen.queryByTestId('review-form')).not.toBeInTheDocument()
  })

  it('Movies table should has 3 rows including header', async () => {
    render(
      <Provider store={makeStore({movies:{selectedMovie: undefined}})}>
        <MoviesTable movies={mockMovieData} companies={mockMovieCompanyData}/>
      </Provider>
    )

    expect(screen.queryByTestId('movies-datagrid')).toBeInTheDocument()

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(3)
  })

  it('After clicking on the last row we expect to get selected movie in state', async () => {
    const store = makeStore({movies:{selectedMovie: undefined}})
    render(
      <Provider store={store}>
        <MoviesTable movies={mockMovieData} companies={mockMovieCompanyData}/>
      </Provider>
    )

    expect(screen.queryByTestId('movies-datagrid')).toBeInTheDocument()

    const rows = screen.getAllByRole('row')
    const lastRow = rows[rows.length - 1]
    await userEvent.click(lastRow)

    const state = store.getState()
    expect(state.movies.selectedMovie).toEqual(mockMovieData[mockMovieData.length - 1])
  })
})