export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) : {id: number, name: string, status: string} {
    const server = this.servers.find(
        (s) => {
          // return s.id === id;
          return s.id === Number(id);  // can also use === +id for number conversion
        }
    );

    return server === undefined ? this.servers[0] : server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );

    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
