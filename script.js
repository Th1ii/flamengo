document.getElementById('loadMore').addEventListener('click', function() {
    const players = [
        'Jogador 4',
        'Jogador 5',
        'Jogador 6'
    ];

    const playersList = document.getElementById('players');
    
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        playersList.appendChild(li);
    });
});
