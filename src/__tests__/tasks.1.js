import React from 'react';
import { render, screen, cleanup, } from '@testing-library/react';
import '@testing-library/jest-dom';
import Output from '../App';

afterAll(cleanup);

describe("1.App", () => {
    it("Top level App component should render with customer props", () => {
        render(<Output />);
        expect(screen.getByText(/my name is bob/i)).toBeInTheDocument();
        expect(screen.getByText(/my last name is dylan/i)).toBeInTheDocument();
    });
});