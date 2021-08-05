import * as SidebarStyles from './styles';

export const Sidebar = () => {
  return (
    <SidebarStyles.Container>
      <SidebarStyles.WannaDrive>
        <h1>Onde o seu carro está?</h1>
      </SidebarStyles.WannaDrive>

      <form>
        <label>Endereço</label>
        <input />
      </form>
    </SidebarStyles.Container>
  );
};
