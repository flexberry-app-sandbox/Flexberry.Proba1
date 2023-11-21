docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba_1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proba_1/app ../..
