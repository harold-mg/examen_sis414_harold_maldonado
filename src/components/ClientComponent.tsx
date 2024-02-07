
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      {/* Renderizar lista de usuarios aquí */}
    </div>
  );
};

export default ClientComponent;
