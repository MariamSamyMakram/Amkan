#!/bin/bash

ENVIRONMENT='dev'
IGNORE_FILE='./rsync.ignore'
CONF_DIR='sync'
# Environment Arrays
# 0 => SSH_USER
# 1 => SSH_HOST
# 2 => SSH_PORT
# 3 => SCP_ROOT (Absolute: e.g.: /home/usr/envs/prod)
# 4 => LARAVEL_FOLDER (e.g.: web, Site)
# 5 => PHP_BIN (e.g.: /usr/local/bin/php -d memery_limit=512M)
# 6 => PHP_ARTISAN
declare -a dev=('amkanae' '185.243.77.100' '2252' '/home/amkanae/public_html' '../public_html' 'php' '/home/amkanae/public_html/artisan')
declare -a ENV

HELP=0
RSYNC=1
SSH_ONLY=0
DOWNLOAD=0

while [[ $# > 0 ]]
do
key="$1"

case $key in
  -e|--env)
	HELP=0
	ENVIRONMENT="$2"
	shift
  ;;
  -i|--ignore-file)
    IGNORE_FILE="$2"
    shift
  ;;
  -h|--help)
	HELP=1
  ;;
  --no-rsync|-n)
    RSYNC=0
  ;;
  --ssh)
    SSH_ONLY=1
  ;;
  -D|--download)
    DOWNLOAD=1
  ;;
esac
shift
done


case $ENVIRONMENT in
	prod|PROD|Prod)
    ENV=(${prod[@]}); # echo ${ENV[0]} @${ENV[1]}:${ENV[3]} -p ${ENV[2]}
	  REMOTE_WD='prod'
	;;
	dev|DEV|Dev)
    ENV=(${dev[@]});  # echo ${ENV[0]} @${ENV[1]}:${ENV[3]} -p ${ENV[2]}
	  REMOTE_WD='dev'
	;;
	*)
	  HELP=1
	  REMOTE_WD=$ENVIRONMENT
    ;;
esac

if [ $HELP -gt 0 ]
then
  echo "Developed by ArkDev
  $0 [-h|--help] [-e|--env ENVIRONMENT] [-i|--ignore-file IGNORE_FILE]
    (--ssh | [-n|--no-rsync | -D|--download])

Usage: Deploy all updates to server using rsync
	-e, --env		Choose environment to deploy to. (Default: $ENVIRONMENT)
	-h, --help		Print this help
	-i, --ignore-file	Path to rsync ignore file. (Default: $IGNORE_FILE)
	-n, --no-rsync		Skip file transfere, continue to configuration prompt
				directly
	-D, --download  	Download files instead of uploading them. Dosn't work
				if (-n|--no-rsync) option is selected
	--ssh			Connect SSH ONLY!

Available Environments:
	dev|DEV			development environment
	stage|STAGE		stage environment
	prod|PROD		production environment"

  exit 0
fi

REMOTE_PATH=${ENV[3]}

if [ $SSH_ONLY -gt 0 ]
then
  ssh -o PubkeyAuthentication=yes -p ${ENV[2]} -t ${ENV[0]}@${ENV[1]} "cd ${REMOTE_PATH}/${ENV[4]} && exec bash -l "
  exit 0
fi

if [ $RSYNC -gt 0 ]
then
  if [ $DOWNLOAD -gt 0 ]
  then
    ACTION='Downloading from'
    SRC="${ENV[0]}@${ENV[1]}:${ENV[3]}/"
    if test "$ENVIRONMENT" = 'prod'; then
      DST=build/
    else
      DST=build/
    fi

  else
    ACTION='Deploying to'
    case $ENVIRONMENT in
        prod|PROD|Prod)
          SRC=./build/
        ;;
        stage|STAGE|Stage)
          SRC=.
        ;;
        *)
          SRC=./build/
        ;;
    esac

    DST="${ENV[0]}@${ENV[1]}:${ENV[3]}"
  fi
  echo "> $ACTION $REMOTE_PATH (DRY-RUN)"
  rsync -avzi --del --no-perms -e "ssh -p ${ENV[2]}" $SRC $DST  --exclude-from="$IGNORE_FILE" --no-times --checksum --dry-run

  CONT='n'

  read  -p "> Do you want to continue?[y:N]" CONT

  case $CONT in
  	Y*|y*)
  	;;
  	*)
  	  exit
  	;;
  esac

  rsync -avz --del --no-perms -e "ssh -p ${ENV[2]}" $SRC $DST --exclude-from="$IGNORE_FILE" --no-times --checksum
else
  echo "Using (${ENVIRONMENT}) $REMOTE_PATH:"
fi

read -p "> Do you want to rebuild cache?[y:N]" CONT

case $CONT in
  Y*|y*)
    echo "Rebuilding cache at $REMOTE_PATH:"
    ssh -p ${ENV[2]} "${ENV[0]}@${ENV[1]}" "${ENV[5]} ${ENV[6]} cache:clear"
    ;;
  *)
  ;;
esac
