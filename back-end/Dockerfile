# Use the official .NET Core SDK image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["back-end.csproj", "./"]
RUN dotnet restore "back-end.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "back-end.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "back-end.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "back-end.dll"]
