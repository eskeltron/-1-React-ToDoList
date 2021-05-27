import { ContainerCard } from "./ContainerCard";
import { ContainerHeader } from "./ContainerHeader";
import { ContainerBody } from "./ContainerBody";
import { ContainerFooter } from "./ContainerFooter";

const Container = ContainerCard;

Container.Body = ContainerBody;
Container.Header = ContainerHeader;
Container.Footer = ContainerFooter;

export { Container };
