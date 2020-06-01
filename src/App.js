import React from 'react';
import Layout from './hoc/Layout/Layout';

function App() {
    const titleStyle = {
        textAlign: 'center',
        fontSize: '14px',
        letterSpacing: '0.2rem',
    }

    return (
        <div className="App">
            <Layout>
                <div style={titleStyle}
                >
                    NOW PLAING
                </div>
            </Layout>
        </div>
    );
}

export default App;
