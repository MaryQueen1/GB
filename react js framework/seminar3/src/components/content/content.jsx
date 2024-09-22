function Content({ theme }) {
    const styles = {
        container: {
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
            color: theme === 'light' ? '#000000' : '#ffffff',
            borderRadius: '8px',
            transition: 'background-color 0.3s ease, color 0.3s ease',
        }
    };

    return (
        <div style={styles.container}>
            <h2>{theme === 'light' ? 'Светлая тема' : 'Темная тема'}</h2>
        </div>
    );
}

export default Content;