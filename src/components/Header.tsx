import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import { SearchForm } from "../types";

type Props = {
  onSubmit: (search: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container mt="1" maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoSearchOutline />
          </InputLeftElement>
          <Input
            mr={2}
            // !! -> niega dos veces y lo deuvelve como boolean
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="tel"
            placeholder="Intenta con 'chicken' o 'beans'..."
          />
          <Button color="white" type="submit" bgColor="blue.400">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;